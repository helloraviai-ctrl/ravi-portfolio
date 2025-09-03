import SwasthAI, { meta as swasthMeta } from "./swasthai";
import BharatTutor, { meta as bharatTutorMeta } from "./bharat-tutor";
import Caremate, { meta as careMeta } from "./caremate-ai";
import Decision, { meta as decMeta } from "./decision-ai";
import Bharat, { meta as bharatMeta } from "./bharatgpt";

export const projects = [
  { slug: "swasthai", meta: swasthMeta, component: SwasthAI },
  { slug: "bharat-tutor", meta: bharatTutorMeta, component: BharatTutor },
  { slug: "caremate-ai", meta: careMeta, component: Caremate },
  { slug: "decision-ai", meta: decMeta, component: Decision },
  { slug: "bharatgpt", meta: bharatMeta, component: Bharat },
] as const;

export const projectMap = Object.fromEntries(projects.map(p => [p.slug, p]));
