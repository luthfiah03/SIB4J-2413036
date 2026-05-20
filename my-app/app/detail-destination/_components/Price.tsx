export default function Price({price,}: {price: string;}) {
  return (
    <h1 className="text-lg font-bold mt-1 whitespace-nowrap">
      {price}
    </h1>
  );
}