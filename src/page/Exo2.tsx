
import React, { useEffect, useState, useContext } from 'react';
import { fetchTasks } from '../services/tasksService';
import TaskCard from '../components/tasks/TaskCard';
import CreateTaskModal from '../components/tasks/CreateTaskModal';
import { AuthContext } from '../context/AuthContext';

type Task = {
  id: number;
  title: string;
  visible: boolean;
  complet: boolean;
};

function Exo2() {
  const auth = useContext(AuthContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const refreshTasks = () => {
    setLoading(true);
    fetchTasks()
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return (
    <>
      <h1>Exo 2</h1>
      {auth?.token && (
        <button onClick={() => setModalOpen(true)} style={{ marginBottom: 24, padding: '0.7em 1.2em', borderRadius: 8, background: '#61dafb', border: 'none', color: '#222', fontWeight: 600 }}>
          Créer une tâche
        </button>
      )}
      <CreateTaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onTaskCreated={refreshTasks} />
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: 'red' }}>Erreur : {error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

export default Exo2;