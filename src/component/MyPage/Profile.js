export default function Profile({ userInfo }) {
  const { email, name } = userInfo;
  return (
    <div
      style={{
        textAlign: "center",
        height: "300px",
      }}
    >
      프로필
      {email}: {name}
    </div>
  );
}
