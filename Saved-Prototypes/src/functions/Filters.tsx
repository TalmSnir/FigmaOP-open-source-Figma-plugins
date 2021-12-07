import * as React from 'react';
import { FilterTabs, FilterSearch, FlexContainer } from '../components';
export default function Filters() {
  return (
    <section>
      <FlexContainer direction='column'>
        <FilterSearch />
        <FilterTabs />
      </FlexContainer>
    </section>
  );
}
