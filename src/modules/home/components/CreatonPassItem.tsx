interface CreatonPassItemProps {
  title: string;
}

export default function CreatonPassItem({ title }: CreatonPassItemProps) {
  return (
    <p className="p-4 text-lg font-satoshi font-normal bg-black-100 mb-3 text-white-100 border border-gray-100">
      {title}
    </p>
  );
}
