import { find } from "lodash";
export function findErrorMessages(errors: any[] | any, path: string) {
  if (!errors?.length) return;
  return find(errors, function (e: any) {
    return e.path === path;
  })?.message;
}
