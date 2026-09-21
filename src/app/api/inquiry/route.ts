import { POST_INQUIRY } from "@/lib/form-handlers";

export async function POST(request: Request) {
  return POST_INQUIRY(request);
}
