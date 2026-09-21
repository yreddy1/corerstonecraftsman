import { POST_CONTACT } from "@/lib/form-handlers";

export async function POST(request: Request) {
  return POST_CONTACT(request);
}
