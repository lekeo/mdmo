import React, { useState } from "react";

import Button from "components/buttons/Button";
import Checkbox from "components/forms/fields/Checkbox";
import CustomLink from "components/CustomLink";
// @ts-ignore
import InputField from "components/forms/fields/InputField";
import validUrl from "components/forms/validators/valid_url";
import SectionHeader from "components/SectionHeader";
import GitOpsModeTooltipWrapper from "components/GitOpsModeTooltipWrapper";

import { LEARN_MORE_ABOUT_BASE_LINK } from "utilities/constants";
import {
  IAppConfigFormProps,
  IFormField,
} from "../../../OrgSettingsPage/cards/constants";

const baseClass = "app-config-form";

interface ISsoFormData {
  idpName: string;
  enableSso: boolean;
  entityId: string;
  idpImageUrl: string;
  metadata: string;
  metadataUrl: string;
  enableSsoIdpLogin: boolean;
  enableJitProvisioning: boolean;
}

interface ISsoFormErrors {
  idp_image_url?: string | null;
  metadata?: string | null;
  metadata_url?: string | null;
  entity_id?: string | null;
  idp_name?: string | null;
}

const validate = (formData: ISsoFormData) => {
  const errors: ISsoFormErrors = {};

  const {
    enableSso,
    idpImageUrl,
    metadata,
    metadataUrl,
    entityId,
    idpName,
  } = formData;

  if (enableSso) {
    if (idpImageUrl && !validUrl({ url: idpImageUrl })) {
      errors.idp_image_url = `${idpImageUrl} is not a valid URL`;
    }

    if (!metadata) {
      if (!metadataUrl) {
        errors.metadata_url =
          "Metadata URL is required (if metadata is not present)";
        errors.metadata =
          "Metadata is required (if metadata URL is not present)";
      } else if (
        !validUrl({ url: metadataUrl, protocols: ["http", "https"] })
      ) {
        errors.metadata_url = `${metadataUrl} is not a valid URL`;
      }
    }

    if (!entityId) {
      errors.entity_id = "Entity ID must be present";
    }

    if (typeof entityId === "string" && entityId.length < 5) {
      errors.entity_id = "Entity ID must be 5 or more characters";
    }

    if (!idpName) {
      errors.idp_name = "Identity provider name must be present";
    }
  }

  return errors;
};

const Sso = ({
  appConfig,
  handleSubmit,
  isPremiumTier,
  isUpdatingSettings,
}: IAppConfigFormProps): JSX.Element => {
  const gitOpsModeEnabled = appConfig.gitops.gitops_mode_enabled;

  const [formData, setFormData] = useState<ISsoFormData>({
    enableSso: appConfig.sso_settings?.enable_sso ?? false,
    idpName: appConfig.sso_settings?.idp_name ?? "",
    entityId: appConfig.sso_settings?.entity_id ?? "",
    idpImageUrl: appConfig.sso_settings?.idp_image_url ?? "",
    metadata: appConfig.sso_settings?.metadata ?? "",
    metadataUrl: appConfig.sso_settings?.metadata_url ?? "",
    enableSsoIdpLogin: appConfig.sso_settings?.enable_sso_idp_login ?? false,
    enableJitProvisioning:
      appConfig.sso_settings?.enable_jit_provisioning ?? false,
  });

  const {
    enableSso,
    idpName,
    entityId,
    idpImageUrl,
    metadata,
    metadataUrl,
    enableSsoIdpLogin,
    enableJitProvisioning,
  } = formData;

  const [formErrors, setFormErrors] = useState<ISsoFormErrors>({});

  const onInputChange = ({ name, value }: IFormField) => {
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    const newErrs = validate(newFormData);
    // only set errors that are updates of existing errors
    // new errors are only set onBlur or submit
    const errsToSet: Record<string, string> = {};
    Object.keys(formErrors).forEach((k) => {
      // @ts-ignore
      if (newErrs[k]) {
        // @ts-ignore
        errsToSet[k] = newErrs[k];
      }
    });
    setFormErrors(errsToSet);
  };

  const onInputBlur = () => {
    setFormErrors(validate(formData));
  };

  const onFormSubmit = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    // Formatting of API not UI
    const formDataToSubmit = {
      sso_settings: {
        entity_id: entityId?.trim(),
        idp_image_url: idpImageUrl?.trim(),
        metadata: metadata?.trim(),
        metadata_url: metadataUrl?.trim(),
        idp_name: idpName?.trim(),
        enable_sso: enableSso,
        enable_sso_idp_login: enableSsoIdpLogin,
        enable_jit_provisioning: enableJitProvisioning,
        issuer_uri: appConfig.sso_settings?.issuer_uri ?? "",
        enable_jit_role_sync:
          appConfig.sso_settings?.enable_jit_role_sync ?? false,
      },
    };

    handleSubmit(formDataToSubmit);
  };

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__section`}>
        <SectionHeader title="Single sign-on options" />
        <form onSubmit={onFormSubmit} autoComplete="off">
          {/* "form" class applies global form styling to fields for free */}
          <div
            className={`form ${
              gitOpsModeEnabled ? "disabled-by-gitops-mode" : ""
            }`}
          >
            <Checkbox
              onChange={onInputChange}
              onBlur={onInputBlur}
              name="enableSso"
              value={enableSso}
              parseTarget
            >
              Enable single sign-on
            </Checkbox>
            <InputField
              label="Identity provider name"
              onChange={onInputChange}
              name="idpName"
              value={idpName}
              parseTarget
              onBlur={onInputBlur}
              error={formErrors.idp_name}
              tooltip="A required human friendly name for the identity provider that will provide single sign-on authentication."
            />
            <InputField
              label="Entity ID"
              helpText="The URI you provide here must exactly match the Entity ID field used in identity provider configuration."
              onChange={onInputChange}
              name="entityId"
              value={entityId}
              parseTarget
              onBlur={onInputBlur}
              error={formErrors.entity_id}
              tooltip="The required entity ID is a URI that you use to identify Fleet when configuring the identity provider."
            />
            <InputField
              label="IDP image URL"
              onChange={onInputChange}
              name="idpImageUrl"
              value={idpImageUrl}
              parseTarget
              onBlur={onInputBlur}
              error={formErrors.idp_image_url}
              tooltip={`An optional link to an image such
            as a logo for the identity provider.`}
            />
            <InputField
              label="Metadata"
              type="textarea"
              onChange={onInputChange}
              name="metadata"
              value={metadata}
              parseTarget
              onBlur={onInputBlur}
              error={formErrors.metadata}
              tooltip="Metadata XML provided by the identity provider."
            />
            <InputField
              label="Metadata URL"
              helpText={
                <>
                  If both <b>Metadata URL</b> and <b>Metadata</b> are specified,{" "}
                  <b>Metadata URL</b> will be used.
                </>
              }
              onChange={onInputChange}
              name="metadataUrl"
              value={metadataUrl}
              parseTarget
              onBlur={onInputBlur}
              error={formErrors.metadata_url}
              tooltip="Metadata URL provided by the identity provider."
            />
            <Checkbox
              onChange={onInputChange}
              onBlur={onInputBlur}
              name="enableSsoIdpLogin"
              value={enableSsoIdpLogin}
              parseTarget
            >
              Allow SSO login initiated by identity provider
            </Checkbox>
            {isPremiumTier && (
              <Checkbox
                onChange={onInputChange}
                onBlur={onInputBlur}
                name="enableJitProvisioning"
                value={enableJitProvisioning}
                parseTarget
                helpText={
                  <>
                    <CustomLink
                      url={`${LEARN_MORE_ABOUT_BASE_LINK}/just-in-time-provisioning`}
                      text="Learn more"
                      newTab
                    />{" "}
                    about just-in-time (JIT) user provisioning.
                  </>
                }
              >
                Create user and sync permissions on login
              </Checkbox>
            )}
          </div>
          <GitOpsModeTooltipWrapper
            tipOffset={-8}
            renderChildren={(disableChildren) => (
              <Button
                type="submit"
                disabled={Object.keys(formErrors).length > 0 || disableChildren}
                className="button-wrap"
                isLoading={isUpdatingSettings}
              >
                Save
              </Button>
            )}
          />
        </form>
      </div>
    </div>
  );
};

export default Sso;
