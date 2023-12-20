import React, { useEffect } from 'react';
import { useFormikContext } from 'formik';

const StundensatzRechnerValueUpdater = () => {
  const { values = {}, setFieldValue } = useFormikContext();

  // Produktivstunden
  useEffect(() => {
    if (
      values.annahmen_produktivstunden_wochenarbeitszeit !== undefined &&
      values.annahmen_produktivstunden_wochenarbeitstage !== undefined
    ) {
      const durchschnittArbeitsstundenProTag =
        values.annahmen_produktivstunden_wochenarbeitszeit / values.annahmen_produktivstunden_wochenarbeitstage || 0;
      setFieldValue('annahmen_produktivstunden_durchschnittArbeitsstundenProTag', durchschnittArbeitsstundenProTag);
    }
  }, [values.annahmen_produktivstunden_wochenarbeitszeit, values.annahmen_produktivstunden_wochenarbeitstage, setFieldValue]);
  useEffect(() => {
    const countWeekends = (year) => {
      let count = 0;
      let date = new Date(year, 0, 1); // Startdatum ist der 1. Januar des gegebenen Jahres

      while (date.getFullYear() === year) {
        const dayOfWeek = date.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          // 0 steht für Sonntag, 6 für Samstag
          count++;
        }
        date.setDate(date.getDate() + 1); // Gehe zum nächsten Tag
      }

      return count;
    };

    if (values.annahmen_allgemein_planjahr) {
      const weekendDays = countWeekends(values.annahmen_allgemein_planjahr);
      if (weekendDays !== values.annahmen_produktivstunden_wochenendtageProJahr) {
        setFieldValue('annahmen_produktivstunden_wochenendtageProJahr', weekendDays);
      }
    } else if (values.annahmen_produktivstunden_wochenendtageProJahr) {
      setFieldvalue('annahmen_produktivstunden_wochenendtageProJahr', undefined);
    }
  }, [setFieldValue, values.annahmen_allgemein_planjahr, values.annahmen_produktivstunden_wochenendtageProJahr]);
  useEffect(() => {
    if (
      values.annahmen_produktivstunden_wochenarbeitszeit !== undefined &&
      values.annahmen_produktivstunden_wochenarbeitstage !== undefined &&
      values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag !== undefined &&
      values.annahmen_produktivstunden_wochenendtageProJahr !== undefined
    ) {
      const arbeitsstundenProJahr = 365 * values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag || 0;
      const wochenendArbeitsstundenProJahr =
        values.annahmen_produktivstunden_wochenendtageProJahr * values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag || 0;
      const jahresarbeitszzeitInTagen = 365 - values.annahmen_produktivstunden_wochenendtageProJahr || 0;
      const jahresArbeitszeitInStunden = arbeitsstundenProJahr - wochenendArbeitsstundenProJahr || 0;

      jahresArbeitszeitInStunden !== values.annahmen_produktivstunden_jahresArbeitszeitInStunden &&
        setFieldValue('annahmen_produktivstunden_jahresArbeitszeitInStunden', jahresArbeitszeitInStunden);
      jahresarbeitszzeitInTagen !== values.annahmen_produktivstunden_jahresarbeitszzeitInTagen &&
        setFieldValue('annahmen_produktivstunden_jahresarbeitszzeitInTagen', jahresarbeitszzeitInTagen);
    }
  }, [
    values.annahmen_produktivstunden_wochenarbeitszeit,
    values.annahmen_produktivstunden_wochenarbeitstage,
    values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag,
    values.annahmen_produktivstunden_wochenendtageProJahr,
    setFieldValue,
    values.annahmen_produktivstunden_jahresArbeitszeitInStunden,
    values.annahmen_produktivstunden_jahresarbeitszzeitInTagen
  ]);

  // Produktivstunden 2
  useEffect(() => {
    const summeNichtanwesenheitInTagen =
      values.annahmen_produktivstunden_arbeitstageAlsFeiertag +
        values.annahmen_produktivstunden_urlaubstageProMitarbeiter +
        values.annahmen_produktivstunden_krankentageProMitarbeiter +
        values.annahmen_produktivstunden_sonstigeArbeitsverhinderungen || 0;

    const summeNichtanwesenheitInStunden =
      summeNichtanwesenheitInTagen * values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag || 0;

    summeNichtanwesenheitInTagen !== values.annahmen_produktivstunden_summeNichtanwesenheitInTagen &&
      setFieldValue('annahmen_produktivstunden_summeNichtanwesenheitInTagen', summeNichtanwesenheitInTagen);
    summeNichtanwesenheitInStunden !== values.annahmen_produktivstunden_summeNichtanwesenheitInStunden &&
      setFieldValue('annahmen_produktivstunden_summeNichtanwesenheitInStunden', summeNichtanwesenheitInStunden);
  }, [
    values.annahmen_produktivstunden_durchschnittArbeitsstundenProTag,
    values.annahmen_produktivstunden_arbeitstageAlsFeiertag,
    values.annahmen_produktivstunden_urlaubstageProMitarbeiter,
    values.annahmen_produktivstunden_krankentageProMitarbeiter,
    values.annahmen_produktivstunden_sonstigeArbeitsverhinderungen,
    setFieldValue,
    values.annahmen_produktivstunden_summeNichtanwesenheitInTagen,
    values.annahmen_produktivstunden_summeNichtanwesenheitInStunden
  ]);

  // Produktivstunden 3
  useEffect(() => {
    const anwesenheitszeitInTagen =
      values.annahmen_produktivstunden_jahresarbeitszzeitInTagen - values.annahmen_produktivstunden_summeNichtanwesenheitInTagen || 0;
    const anwesenheitszeitInStunden =
      values.annahmen_produktivstunden_jahresArbeitszeitInStunden - values.annahmen_produktivstunden_summeNichtanwesenheitInStunden || 0;

    anwesenheitszeitInTagen !== values.annahmen_produktivstunden_anwesenheitszeitInTagen &&
      setFieldValue('annahmen_produktivstunden_anwesenheitszeitInTagen', anwesenheitszeitInTagen);
    anwesenheitszeitInStunden !== values.annahmen_produktivstunden_anwesenheitszeitInStunden &&
      setFieldValue('annahmen_produktivstunden_anwesenheitszeitInStunden', anwesenheitszeitInStunden);
  }, [
    values.annahmen_produktivstunden_summeNichtanwesenheitInTagen,
    values.annahmen_produktivstunden_summeNichtanwesenheitInStunden,
    setFieldValue,
    values.annahmen_produktivstunden_anwesenheitszeitInTagen,
    values.annahmen_produktivstunden_anwesenheitszeitInStunden,
    values.annahmen_produktivstunden_jahresarbeitszzeitInTagen,
    values.annahmen_produktivstunden_jahresArbeitszeitInStunden
  ]);

  // Lohnnebenkostensatz
  useEffect(() => {
    const jahresArbeitszeitFuerLaufendeBezuege =
      values.annahmen_produktivstunden_summeNichtanwesenheitInTagen + values.annahmen_produktivstunden_anwesenheitszeitInTagen || 0;
    const svAbgabenArbeitgeberInTagen =
      (values.annahmen_lohnnebenkosten_svAbgabenArbeitgeber / 100) * jahresArbeitszeitFuerLaufendeBezuege || 0;
    const sonstigeKostenInTagen = (values.annahmen_lohnnebenkosten_sonstigeKosten / 100) * jahresArbeitszeitFuerLaufendeBezuege || 0;
    const gesamtkostensatzDerProduktivkapazitaet =
      jahresArbeitszeitFuerLaufendeBezuege + svAbgabenArbeitgeberInTagen + sonstigeKostenInTagen || 0;
    const gesamtkostensatzDerProduktivkapazitaetInProzent =
      (gesamtkostensatzDerProduktivkapazitaet / values.annahmen_produktivstunden_anwesenheitszeitInTagen - 1) * 100 || 0;

    gesamtkostensatzDerProduktivkapazitaetInProzent !== values.annahmen_lohnnebenkosten_lohnnebenkostensatz &&
      setFieldValue('annahmen_lohnnebenkosten_lohnnebenkostensatz', gesamtkostensatzDerProduktivkapazitaetInProzent);
  }, [
    setFieldValue,
    values.annahmen_lohnnebenkosten_lohnnebenkostensatz,
    values.annahmen_lohnnebenkosten_sonderzahlungen,
    values.annahmen_lohnnebenkosten_sonstigeKosten,
    values.annahmen_lohnnebenkosten_svAbgabenArbeitgeber,
    values.annahmen_produktivstunden_anwesenheitszeitInTagen,
    values.annahmen_produktivstunden_summeNichtanwesenheitInTagen
  ]);

  return <React.Fragment />;
};

export default StundensatzRechnerValueUpdater;
