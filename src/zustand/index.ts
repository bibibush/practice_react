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
  updateState: (datas) =>
    set((state) => {
      return {
        status: "fulfilled",
        dataList: [...state.dataList, ...datas],
      };
    }),
}));

export default useStore;
