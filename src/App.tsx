import "./styles.css";

export default function App() {
  function echo<T>(value: T): T {
    return value;
  }

  const result = echo(1);
  console.log(result);

  function getLength<T>(items: T[]): number {
    return items.length;
  }
  const arrayLength = getLength([1, 2, 3, 4]);
  console.log(arrayLength);

  function wrap<T>(value: T): T[] {
    return [value];
  }

  const array = wrap(1);
  console.log(array);

  function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
  }
  logAndReturn<string>("Hello");
  logAndReturn<number>(42);
  logAndReturn<boolean>(true);

  function isEmpty<T>(arr: T[]): boolean {
    return arr.length === 0;
  }

  isEmpty<number>([]); // true
  isEmpty<string>(["hi"]); // false

  function containsItem<T>(items: T[], item: T): boolean {
    return items.includes(item);
  }

  containsItem<number>([1, 2, 3], 2); // true
  containsItem<string>(["a", "b"], "c"); // false

  function countOccurrences<T>(items: T[], item: T): number {
    return items.filter((i) => i === item).length;
  }
  countOccurrences<number>([1, 2, 2, 3, 2], 2); // 3
  countOccurrences<string>(["a", "b", "a"], "a"); // 2

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
