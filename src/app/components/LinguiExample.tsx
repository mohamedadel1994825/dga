/**
 * Example component demonstrating Lingui usage
 * This is a reference - feel free to delete this file
 */

import { Trans, t, Plural } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export function LinguiExample() {
  const { _ } = useLingui();
  const itemCount = 5;

  return (
    <div className="p-4 space-y-4">
      {/* Basic translation */}
      <h1 className="text-2xl font-bold">
        <Trans>Welcome to Lingui</Trans>
      </h1>

      {/* Translation with variables */}
      <p>
        <Trans>
          This is an example of <strong>internationalization</strong> with Lingui
        </Trans>
      </p>

      {/* Using t macro for attributes */}
      <input
        type="text"
        placeholder={_(t`Search...`)}
        className="border p-2 rounded"
      />

      {/* Pluralization */}
      <p>
        <Plural
          value={itemCount}
          one="You have # item"
          other="You have # items"
        />
      </p>
    </div>
  );
}

