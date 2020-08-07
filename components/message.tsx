export default function Copy({
  message,
  newMessage,
  style,
}: {
  message: string;
  newMessage: boolean;
  style: {
    backgroundColor: string;
    color: string;
  };
}) {
  return (
    <div className="text-center" style={style}>
      <div
        className="items-center leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        {newMessage && (
          <span className="flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span>
        )}
        <span className="font-semibold mr-2 text-left flex-auto">
          {message}
        </span>
      </div>
    </div>
  );
}
