export default function QueryDescriptor({ message = "Showing all Pokemon (1271)"}): JSX.Element {
  return (
      <span className="text-sm text-gray-400 text-right pb-2 pr-2 inline-block align-bottom mt-4">
        {message}
      </span>
  );
}
