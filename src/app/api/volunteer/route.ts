import { POST_VOLUNTEER } from "@/lib/form-handlers";

export async function POST(request: Request) {
  return POST_VOLUNTEER(request);
}
