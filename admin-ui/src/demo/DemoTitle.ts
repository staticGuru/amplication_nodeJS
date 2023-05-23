import { Demo as TDemo } from "../api/demo/Demo";

export const DEMO_TITLE_FIELD = "id";

export const DemoTitle = (record: TDemo): string => {
  return record.id || String(record.id);
};
