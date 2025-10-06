import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { deleteTask } from '../../services/tasksService';

export type Task = {
  id: number;
  title: string;
  visible: boolean;
  complet: boolean;
};

interface TaskCardProps {
  task: Task;
  onDelete?: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
  const auth = useContext(AuthContext);
  const handleDelete = async () => {
    if (!auth?.token) return;
    try {
  await deleteTask(task.id, auth.token);
  if (onDelete) onDelete(task.id);
  window.location.reload();
    } catch {
      alert('Erreur lors de la suppression');
    }
  };
  return (
    <div
      style={{
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: 12,
        boxShadow: '0 2px 8px #0001',
        padding: '1.5rem',
        minWidth: 220,
        background: task.visible ? '#9bff9bff' : '#fcfcfcff',
        position: 'relative',
      }}
    >
      <button
        onClick={handleDelete}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'none',
          border: 'none',
          fontSize: 22,
          color: '#ff6b6b',
          cursor: 'pointer',
          fontWeight: 700,
        }}
        title="Supprimer la tâche"
      >
        ×
      </button>
      <div style={{ position: 'absolute', top: 12, right: 40, fontSize: '0.9rem', color: '#888' }}>ID: {task.id}</div>
      <h2 style={{ margin: '0 0 0.5em 0', fontSize: '1.3rem' }}>{task.title}</h2>
      <p style={{ margin: 0 }}>
        Statut : {task.complet ? (
          <span style={{ color: 'green', fontWeight: 600 }}>Complet</span>
        ) : (
          <span style={{ color: 'orange', fontWeight: 600 }}>En cours</span>
        )}
      </p>
      <p style={{ margin: '0.5em 0 0 0', fontSize: '0.95rem' }}>
        {task.visible ? 'Visible' : 'Non visible'}
      </p>
    </div>
  );
};

export default TaskCard;
