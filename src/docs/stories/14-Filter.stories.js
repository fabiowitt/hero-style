import React from 'react';
import { action } from '@storybook/addon-actions';

import Filter from '../../components/organism/filter/Filter';
import Form from '../../components/organism/form/Form';
import FormActions from '../../components/molecule/form-actions/FormActions';
import FormRow from '../../components/molecule/form-row/FormRow';
import FormGroup from '../../components/molecule/form-group/FormGroup';
import Label from '../../components/atom/label/Label';
import Input from '../../components/atom/input/Input';
import Button from '../../components/atom/button/Button';
import { Grid } from 'react-flexbox-grid';

export default {
  title: 'Filter',
  component: Filter
};

export const ClosedFilter = () => (
  <Filter onClick={action('clicked')}>
    <Form>
      <Grid fluid>
        <FormRow>
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
        </FormRow>
        <FormActions alignEnd>
          <Button onClick={action('Clean')}>Limpar filtros</Button>
          <Button success onClick={action('Filter')} type="submit">Filtrar</Button>
        </FormActions>
      </Grid>
    </Form>
  </Filter>
);

export const OpenedFilter = () => (
  <Filter showFilters={true} onClick={action('clicked')} totalItems={3}>
    <Form>
      <Grid fluid>
        <FormRow>
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
          <FormGroup md={4}>
            <Label name="ipt">Label</Label>
            <Input
              id="ipt"
              name="ipt"
              type="text"
              placeholder="Placeholder text"
              value=""
            />
          </FormGroup>
        </FormRow>
        <FormActions alignEnd>
          <Button onClick={action('Clean')}>Limpar filtros</Button>
          <Button success onClick={action('Filter')} type="submit">Filtrar</Button>
        </FormActions>
      </Grid>
    </Form>
  </Filter>
);