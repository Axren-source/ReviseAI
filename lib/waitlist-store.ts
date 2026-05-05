import { promises as fs } from "node:fs";
import path from "node:path";

export type WaitlistEntry = {
  email: string;
  createdAt: string;
};

const WAITLIST_FILE = path.join(process.cwd(), "data", "waitlist.json");

async function ensureFile() {
  await fs.mkdir(path.dirname(WAITLIST_FILE), { recursive: true });
  try {
    await fs.access(WAITLIST_FILE);
  } catch {
    await fs.writeFile(WAITLIST_FILE, "[]", "utf8");
  }
}

export async function readWaitlist(): Promise<WaitlistEntry[]> {
  await ensureFile();
  const raw = await fs.readFile(WAITLIST_FILE, "utf8");
  try {
    return JSON.parse(raw) as WaitlistEntry[];
  } catch {
    return [];
  }
}

export async function addToWaitlist(entry: WaitlistEntry) {
  const list = await readWaitlist();
  const exists = list.some((item) => item.email.toLowerCase() === entry.email.toLowerCase());

  if (exists) {
    return { added: false, reason: "duplicate" as const };
  }

  list.push(entry);
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(list, null, 2), "utf8");
  return { added: true as const };
}
