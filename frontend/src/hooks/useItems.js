// Provides reusable item loading and CRUD state for any page or component.
import { useCallback, useEffect, useState } from 'react';
import * as service from '../api/itemService';

export default function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const refresh = useCallback(async () => {
    try { setError(''); setItems((await service.listItems()) || []); }
    catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const runAndRefresh = async (operation) => {
    try { setError(''); await operation(); await refresh(); }
    catch (requestError) { setError(requestError.message); throw requestError; }
  };

  return {
    items, loading, error, refresh,
    create: (values) => runAndRefresh(() => service.createItem(values)),
    update: (id, values) => runAndRefresh(() => service.updateItem(id, values)),
    patch: (id, values) => runAndRefresh(() => service.patchItem(id, values)),
    remove: (id) => runAndRefresh(() => service.deleteItem(id)),
  };
}
