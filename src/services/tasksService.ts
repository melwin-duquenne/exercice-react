export async function deleteTask(id: number, token: string): Promise<void> {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
}
export async function createTask(title: string, token: string): Promise<any> {
  const res = await fetch('http://localhost:3001/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error('Erreur lors de la création de la tâche');
  return res.json();
}

export async function fetchTasks() {
  const res = await fetch('http://localhost:3001/tasks');
  if (!res.ok) throw new Error('Erreur serveur');
  return res.json();
}

export async function loginUser(email: string, password: string): Promise<string> {
  const res = await fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Identifiants invalides');
  const data = await res.json();
  return data.token;
}
