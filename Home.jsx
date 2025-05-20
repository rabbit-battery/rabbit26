import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [qrData, setQrData] = useState("");

  const login = () => {
    if (user === "admin@rabbit.com" && password === "rabbit123") {
      setLoggedIn(true);
      setRole("admin");
    } else if (user === "worker1@rabbit.com" && password === "worker123") {
      setLoggedIn(true);
      setRole("worker");
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  };

  const handleScan = () => {
    if (qrData.trim()) {
      alert(`تم تسجيل البطارية: ${qrData}`);
      setQrData("");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="p-8 w-full max-w-md bg-white shadow rounded">
          <h2 className="text-2xl font-bold text-center text-green-700">Rabbit | تسجيل الدخول</h2>
          <input placeholder="البريد الإلكتروني" value={user} onChange={(e) => setUser(e.target.value)} />
          <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="w-full bg-green-600 text-white mt-4" onClick={login}>دخول</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-6">مرحبًا {role === "admin" ? "بالمدير" : "بالعامل"} 👋</h1>

      {role === "worker" && (
        <div className="max-w-md space-y-4">
          <h2 className="text-xl font-semibold">سكان QR لتسجيل البطارية</h2>
          <input
            placeholder="ادخل كود البطارية أو اسكان الكود..."
            value={qrData}
            onChange={(e) => setQrData(e.target.value)}
          />
          <button className="bg-green-600 text-white mt-2" onClick={handleScan}>تسجيل</button>
        </div>
      )}

      {role === "admin" && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">لوحة تحكم المدير (تحت التطوير)</h2>
          <p>سيتمكن المدير من إدارة المستخدمين، البطاريات، والفروع.</p>
        </div>
      )}
    </div>
  );
}
