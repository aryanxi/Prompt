import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (request,{params}) => {
  try {
    await connectToDB();

      const prompt = await Prompt.findById(params.id).populate("creator");
      if (!prompt) return new Response("Prompt not found ", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch the data", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();

        const existingPrompt = await Prompt.findById(params.id);
        if (!existingPrompt) return new Response("Prompt not found", { status: 404 });
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        await existingPrompt.save();
        return new Response("Prompt updated successfully", { status: 200 });
        

    } catch (error) {
        return new Response("failed to update a prompt.", { status: 500 });
    }
}

export const DELETE = async (request, { params }) =>
{
    try {
        await connectToDB();

        await Prompt.findById(params.id);
        return new Response("Prompt Deleted successfully ",{status:200})
    } catch (error) {
        return new Response("Prompt Deleted failed ", { status: 500 });
        
    }
}