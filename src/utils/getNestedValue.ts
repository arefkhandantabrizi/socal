const getNestedValue = <T, K extends string>(obj: T, path: K): unknown => {
  return path.split(".").reduce((acc: unknown, part: string) => {
    if (typeof acc === "object" && acc !== null && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
};

export default getNestedValue;
