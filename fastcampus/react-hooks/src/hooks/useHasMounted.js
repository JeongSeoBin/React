import { useEffect, useState } from "react";

// mount되었는지에 대한 상태를 관리하고 리턴하는 hook
export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}
