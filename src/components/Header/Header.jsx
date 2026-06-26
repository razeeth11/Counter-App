import { UserSettingsIcon } from "../Icons/Icons";

export function Header() {
  return (
    <>
      <div className="header">
        <h2>Countly</h2>
        <button>
          <UserSettingsIcon />
        </button>
      </div>
    </>
  );
}
