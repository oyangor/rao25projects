import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlag() {
    try {
      setLoading(true);
      const res = await featureFlagDataServiceCall();
      //console.log(res);
      setEnabledFlags(res);
      setLoading(false);
    } catch (e) {
      console.log(e);
      throw new e();
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFeatureFlag();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ enabledFlags, loading }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
