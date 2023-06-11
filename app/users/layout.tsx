import { TabGroup } from "app/ui/components/tab-group";

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-white flex space-x-3">
        <TabGroup
          path="/users"
          items={[
            {
              text: "목록 ISR",
              slug: "",
              segment: "users",
            },
            {
              text: "등록",
              slug: "form",
              segment: "form",
            },
          ]}
        />
      </div>
      {children}
    </div>
  );
}
