import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTaskCreated: () => void;
}
export default function CreateTaskModal({ isOpen, onClose, onTaskCreated }: CreateTaskModalProps) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const auth = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    const token = auth?.token;
    if (!token) {
      setError('Vous devez être connecté pour créer une tâche.');
      setLoading(false);
      return;
    }
    try {
      const { createTask } = await import('../../services/tasksService');
      await createTask(title, token);
      setSuccess('Tâche créée avec succès !');
      setTitle('');
      onTaskCreated();
    } catch (err) {
      setError('Erreur lors de la création de la tâche.');
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0008', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: 12, minWidth: 320, boxShadow: '0 2px 12px #0002', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer' }}>&times;</button>
        <h2>Créer une tâche</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Titre de la tâche"
            style={{ padding: '0.7em', borderRadius: 6, border: '1px solid #ccc' }}
            required
          />
          <button type="submit" disabled={loading} style={{ padding: '0.7em', borderRadius: 6, background: '#61dafb', border: 'none', color: '#222', fontWeight: 600 }}>
            {loading ? 'Création...' : 'Créer'}
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
        {success && <p style={{ color: 'green', marginTop: 12 }}>{success}</p>}
      </div>
    </div>
  );
}
