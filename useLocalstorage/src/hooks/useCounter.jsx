import useLocalstorage from "./useLocalstorage";
function useCounter(initial = 1) {
  const [Count, setCount] = useLocalstorage("murad", initial);
  function multiply() {
    setCount(Count * 2);
  }
  function division() {
    setCount(Count / 2);
  }
  return [Count, multiply, division];
}

export default useCounter;
