// types
import { createSlice } from '@reduxjs/toolkit';

import { uid } from 'uid';

// initial state
const initialState = {
  activeFormId: null,
  activeStep: null,
  forms: {}
};

// ==============================|| SLICE - FORM ||============================== //

const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    activeStep(state, action) {
      state.activeStep = action.payload;
    },
    setCurrentFormValues(state, action) {
      state.currentFormValues = action.payload;
      console.log('saved', action.payload);
    },
    createForm(state, action) {
      const newFormId = uid();
      const newForm = {
        id: newFormId,
        userTitle: action.payload.userTitle,
        userDescription: null,
        creationDate: new Date(),
        type: action.payload.type,
        formValues: {}
      };

      state.forms[newFormId] = newForm;
      state.activeStep = 0;
      state.activeFormId = newFormId;
    },
    removeForm(state, action) {
      const { [action.payload]: _deletedForm, ...forms } = state.forms;
      state.forms = forms;
      state.activeStep = null;
      state.activeFormId = null;
    }
  }
});

export default form.reducer;

export const { activeStep, currentFormValues, setCurrentFormValues, createForm, removeForm } = form.actions;
