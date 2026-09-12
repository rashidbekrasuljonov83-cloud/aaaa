import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "projects.json");

async function getProjects() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading projects data:", error);
    return [];
  }
}

async function saveProjects(projects) {
  try {
    const dir = path.dirname(dataFilePath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify(projects, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving projects data:", error);
    throw error;
  }
}

// GET /api/projects - Retrieve all projects
export async function GET() {
  const projects = await getProjects();
  return NextResponse.json({ success: true, data: projects });
}

// POST /api/projects - Add a new project
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, description, categories, tags, demoUrl, githubUrl, accentGradient, featuredBadge } = body;

    if (!title || !description) {
      return NextResponse.json(
        { success: false, message: "Loyiha nomi va tavsifi kiritilishi shart!" },
        { status: 400 }
      );
    }

    const projects = await getProjects();

    const newProject = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      categories: Array.isArray(categories) && categories.length > 0 ? categories : ["Next.js"],
      tags: Array.isArray(tags) ? tags : (typeof tags === "string" ? tags.split(",").map(t => t.trim()).filter(Boolean) : []),
      demoUrl: demoUrl?.trim() || "#",
      githubUrl: githubUrl?.trim() || "#",
      accentGradient: accentGradient || "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
      featuredBadge: featuredBadge?.trim() || "",
      createdAt: new Date().toISOString(),
    };

    // Prepend new project so it shows at the top
    const updatedProjects = [newProject, ...projects];
    await saveProjects(updatedProjects);

    return NextResponse.json({ success: true, data: newProject, message: "Loyiha muvaffaqiyatli qo'shildi!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// PUT /api/projects - Update an existing project
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, title, description, categories, tags, demoUrl, githubUrl, accentGradient, featuredBadge } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Loyiha ID si ko'rsatilmagan!" }, { status: 400 });
    }

    const projects = await getProjects();
    const index = projects.findIndex((p) => p.id === id.toString());

    if (index === -1) {
      return NextResponse.json({ success: false, message: "Loyiha topilmadi!" }, { status: 404 });
    }

    const updatedProject = {
      ...projects[index],
      title: title !== undefined ? title.trim() : projects[index].title,
      description: description !== undefined ? description.trim() : projects[index].description,
      categories: Array.isArray(categories) ? categories : projects[index].categories,
      tags: Array.isArray(tags) ? tags : (typeof tags === "string" ? tags.split(",").map(t => t.trim()).filter(Boolean) : projects[index].tags),
      demoUrl: demoUrl !== undefined ? demoUrl.trim() : projects[index].demoUrl,
      githubUrl: githubUrl !== undefined ? githubUrl.trim() : projects[index].githubUrl,
      accentGradient: accentGradient !== undefined ? accentGradient : projects[index].accentGradient,
      featuredBadge: featuredBadge !== undefined ? featuredBadge.trim() : projects[index].featuredBadge,
      updatedAt: new Date().toISOString(),
    };

    projects[index] = updatedProject;
    await saveProjects(projects);

    return NextResponse.json({ success: true, data: updatedProject, message: "Loyiha muvaffaqiyatli yangilandi!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

// DELETE /api/projects - Delete a project
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Loyiha ID si ko'rsatilmagan!" }, { status: 400 });
    }

    const projects = await getProjects();
    const filtered = projects.filter((p) => p.id !== id.toString());

    if (filtered.length === projects.length) {
      return NextResponse.json({ success: false, message: "Loyiha topilmadi!" }, { status: 404 });
    }

    await saveProjects(filtered);
    return NextResponse.json({ success: true, message: "Loyiha muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
