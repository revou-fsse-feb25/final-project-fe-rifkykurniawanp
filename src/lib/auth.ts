
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string; // Avatar bersifat opsional
  role: 'admin' | 'supplier' | 'instructor' | 'student' | 'buyer';
}

export async function getCurrentUser(): Promise<User | null> {

  
  const currentRole: User['role'] | null = 'supplier'; // Ganti dengan peran yang diinginkan
  //****************************************************************

  if (!currentRole) {
    return null; // Mengembalikan null jika tidak ada peran (simulasi belum login)
  }

  // mock data pengguna berdasarkan peran
  const sampleUser: User = {
    id: `user-${Math.floor(Math.random() * 1000)}`,
    name: "Rifky Putra",
    email: "rifky.putra@example.com",
    avatar: "https://github.com/shadcn.png", // URL ke avatar contoh
    role: currentRole,
  };

  // Simulasi penundaan jaringan (seperti memanggil API)
  await new Promise(resolve => setTimeout(resolve, 150));

  return sampleUser;
}
