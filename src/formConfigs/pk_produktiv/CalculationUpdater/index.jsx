import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';
import getInitialMitarbeiterData from './getInitialMitarbeiterData';

let timeout = null;

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (!values.pk_produktiv_mitarbeiter || values.pk_produktiv_mitarbeiter?.length === 0) {
      setFieldValue('pk_produktiv_mitarbeiter.0', getInitialMitarbeiterData(values));
    }
  }, [setFieldValue, values]);

  useEffect(() => {
    const reCalculateMaValues = () => {
      let pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt = 0;
      let pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt = 0;
      let pk_produktiv_bruttoStundenEntgeltGesamt = 0;

      values.pk_produktiv_mitarbeiter?.forEach((ma, index) => {
        // Anwesenheitsentgeld (gesamt) START
        const nichtanwesenheitsstundenGesamt =
          0 + (ma.urlaubStd || 0) + (ma.krankheitStd || 0) + (ma.fortbildungStd || 0) + (ma.sonstigeAbwesenheitenStd || 0);
        const anwesenheitsStdMa = (ma.sollarbeitsstdPA || 0) - nichtanwesenheitsstundenGesamt;
        const direktVerrechnet = (anwesenheitsStdMa * (ma.direktVerrechenbar || 100)) / 100;
        const nichtDirektVerrechnet = anwesenheitsStdMa - direktVerrechnet;
        const anwesenheitsentgelt = anwesenheitsStdMa * ((ma.bruttoStundenentgeltStd || 0) + (ma.zulagenProStd || 0));
        const verrechenbarkeitDirektVerreichnet = direktVerrechnet * ((ma.bruttoStundenentgeltStd || 0) + (ma.zulagenProStd || 0));
        const verrechenbarkeitNichtDirektVerreichnet =
          nichtDirektVerrechnet * ((ma.bruttoStundenentgeltStd || 0) + (ma.zulagenProStd || 0));

        pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt += verrechenbarkeitDirektVerreichnet;
        pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt += verrechenbarkeitNichtDirektVerreichnet;
        pk_produktiv_bruttoStundenEntgeltGesamt += ma.bruttoStundenentgeltStd || 0;

        if (nichtanwesenheitsstundenGesamt !== ma.nichtanwesenheitsstundenGesamt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.nichtanwesenheitsstundenGesamt`, nichtanwesenheitsstundenGesamt);
        }
        if (anwesenheitsStdMa !== ma.anwesenheitsStdMa) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.anwesenheitsStdMa`, anwesenheitsStdMa);
        }
        if (direktVerrechnet !== ma.direktVerrechnet) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.direktVerrechnet`, direktVerrechnet);
        }
        if (nichtDirektVerrechnet !== ma.nichtDirektVerrechnet) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.nichtDirektVerrechnet`, nichtDirektVerrechnet);
        }
        if (anwesenheitsentgelt !== ma.anwesenheitsentgelt) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.anwesenheitsentgelt`, anwesenheitsentgelt);
        }
        if (verrechenbarkeitDirektVerreichnet !== ma.verrechenbarkeitDirektVerreichnet) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitDirektVerreichnet`, verrechenbarkeitDirektVerreichnet);
        }
        if (verrechenbarkeitNichtDirektVerreichnet !== ma.verrechenbarkeitNichtDirektVerreichnet) {
          setFieldValue(`pk_produktiv_mitarbeiter.${index}.verrechenbarkeitNichtDirektVerreichnet`, verrechenbarkeitNichtDirektVerreichnet);
        }
      });

      const pk_produktiv_bruttoStundenEntgeltDurchschnitt = values.pk_produktiv_mitarbeiter.length
        ? pk_produktiv_bruttoStundenEntgeltGesamt / values.pk_produktiv_mitarbeiter.length
        : 0;

      const pk_produktiv_anwesenheitsEntgeltGesamt =
        (pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt || 0) + (pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt || 0);

      if (pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt !== values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt) {
        setFieldValue(`pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt`, pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt);
      }
      if (pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt !== values.pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt) {
        setFieldValue(`pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt`, pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt);
      }
      if (pk_produktiv_bruttoStundenEntgeltGesamt !== values.pk_produktiv_bruttoStundenEntgeltGesamt) {
        setFieldValue(`pk_produktiv_bruttoStundenEntgeltGesamt`, pk_produktiv_bruttoStundenEntgeltGesamt);
      }
      if (pk_produktiv_bruttoStundenEntgeltDurchschnitt !== values.pk_produktiv_bruttoStundenEntgeltDurchschnitt) {
        setFieldValue(`pk_produktiv_bruttoStundenEntgeltDurchschnitt`, pk_produktiv_bruttoStundenEntgeltDurchschnitt);
      }
      if (pk_produktiv_anwesenheitsEntgeltGesamt !== values.pk_produktiv_anwesenheitsEntgeltGesamt) {
        setFieldValue(`pk_produktiv_anwesenheitsEntgeltGesamt`, pk_produktiv_anwesenheitsEntgeltGesamt);
      }
      // Anwesenheitsentgeld (gesamt) ENDE
    };

    timeout = setTimeout(() => {
      reCalculateMaValues();
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.pk_produktiv_mitarbeiter,
    values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt,
    values.pk_produktiv_mitarbeiter.length,
    values.pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt,
    values.pk_produktiv_bruttoStundenEntgeltGesamt,
    values.pk_produktiv_bruttoStundenEntgeltDurchschnitt,
    values.pk_produktiv_anwesenheitsEntgeltGesamt
  ]);

  useEffect(() => {
    const reCalculateLohnNKValues = () => {
      const lohnNKAnwesenheitVerrechnet =
        ((values.annahmen_lohnnebenkosten_lohnnebenkostensatz || 0) / 100) *
        (values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt || 0);
      const lohnNKAnwesenheitNichtVerrechnet =
        ((values.annahmen_lohnnebenkosten_lohnnebenkostensatz || 0) / 100) *
        (values.pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt || 0);
      const lohnNKAnwesenheitStundenEntgeltDurchschnitt =
        ((values.annahmen_lohnnebenkosten_lohnnebenkostensatz || 0) / 100) * (values.pk_produktiv_bruttoStundenEntgeltDurchschnitt || 0);
      const lohnNKEntgeltGesamt = (lohnNKAnwesenheitVerrechnet || 0) + (lohnNKAnwesenheitNichtVerrechnet || 0);
      const awInklPersonalNKDirektVerrechenbar =
        (lohnNKAnwesenheitVerrechnet || 0) + (values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt || 0);
      const awInklPersonalNKNichtDirektVerrechenbar =
        (lohnNKAnwesenheitNichtVerrechnet || 0) + (values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt || 0);

      if (!values.pk_produktiv_lohnNKAnwesenheitVerrechnet !== lohnNKAnwesenheitVerrechnet) {
        setFieldValue('pk_produktiv_lohnNKAnwesenheitVerrechnet', lohnNKAnwesenheitVerrechnet);
      }
      if (values.pk_produktiv_lohnNKAnwesenheitNichtVerrechnet !== lohnNKAnwesenheitNichtVerrechnet) {
        setFieldValue('pk_produktiv_lohnNKAnwesenheitNichtVerrechnet', lohnNKAnwesenheitNichtVerrechnet);
      }
      if (values.pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt !== lohnNKAnwesenheitStundenEntgeltDurchschnitt) {
        setFieldValue('pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt', lohnNKAnwesenheitStundenEntgeltDurchschnitt);
      }
      if (values.pk_produktiv_lohnNKEntgeltGesamt !== lohnNKEntgeltGesamt) {
        setFieldValue('pk_produktiv_lohnNKEntgeltGesamt', lohnNKEntgeltGesamt);
      }
      if (values.pk_produktiv_awInklPersonalNKDirektVerrechenbar !== awInklPersonalNKDirektVerrechenbar) {
        setFieldValue('pk_produktiv_awInklPersonalNKDirektVerrechenbar', awInklPersonalNKDirektVerrechenbar);
      }
      if (values.pk_produktiv_awInklPersonalNKDirektVerrechenbar !== awInklPersonalNKDirektVerrechenbar) {
        setFieldValue('pk_produktiv_awInklPersonalNKDirektVerrechenbar', awInklPersonalNKDirektVerrechenbar);
      }
    };

    timeout = setTimeout(() => {
      reCalculateLohnNKValues();
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [
    setFieldValue,
    values.annahmen_lohnnebenkosten_lohnnebenkostensatz,
    values.pk_produktiv_anwesenheitsEntgelteNichtVerrechnetGesamt,
    values.pk_produktiv_anwesenheitsEntgelteVerrechnetGesamt,
    values.pk_produktiv_awInklPersonalNKDirektVerrechenbar,
    values.pk_produktiv_bruttoStundenEntgeltDurchschnitt,
    values.pk_produktiv_lohnNKAnwesenheitNichtVerrechnet,
    values.pk_produktiv_lohnNKAnwesenheitStundenEntgeltDurchschnitt,
    values.pk_produktiv_lohnNKAnwesenheitVerrechnet,
    values.pk_produktiv_lohnNKEntgeltGesamt
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
