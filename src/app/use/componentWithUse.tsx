"use client";

import { use } from "react";
const getFromAPI = async () => {
  return new Promise((res) => setTimeout(() => res("New Data"), 5000));
};

export const ComponentWithUse = () => {
  const response = use(getFromAPI()) as string;

  return <div>UseHook in pages with value {response}</div>;
};
