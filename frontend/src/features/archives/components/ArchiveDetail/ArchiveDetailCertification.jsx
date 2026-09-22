import { formatArchiveDate } from "../../utils/archiveHelpers";
import ArchiveDetailInfo from "./ArchiveDetailInfo";

function ArchiveDetailCertification({ archive }) {
  return (
    <section className="space-y-2">
      <h4 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
        Certification Info
      </h4>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <ArchiveDetailInfo
          label="Issuer"
          value={formatArchiveDate(archive.issuer_date)}
        />

        <ArchiveDetailInfo
          label="Expiry"
          value={formatArchiveDate(archive.expiry_date)}
        />

        <ArchiveDetailInfo label="Issuer" value={archive.issuer} />

        {archive.credential_id && (
          <ArchiveDetailInfo
            label="ID Credential"
            value={archive.credential_id}
          />
        )}
      </div>
    </section>
  );
}

export default ArchiveDetailCertification;
