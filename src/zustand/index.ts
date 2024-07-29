import { create } from "zustand";

interface State {
  status: string;
  dataList: Array<{ [key: string]: any }>;
  data: {
    [key: string]: any;
  };
  message: string;
}

type Actions = {
  updateState: (dataList: Array<{ [key: string]: any }>) => void;
};

const useStore = create<State & Actions>((set) => ({
  status: "pending",
  dataList: [],
  data: {},
  message: "",
  updateState: (dataList) =>
    set(() => {
      return {
        status: "fulfilled",
        dataList,
      };
    }),
}));

export default useStore;
