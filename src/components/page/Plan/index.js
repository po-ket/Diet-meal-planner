import React from 'react';
import PropTypes from 'prop-types';
import Meal from '../../shared/Meal';
import Tabs, { Tab } from '../../shared/Tabs';
import NotFound from '../../shared/NotFound';
import Nav from '../../shared/Nav';
import './Plan.css';

const createContent = (heading, dataOb, index) => {
  const contentArr = [];

  for (const mealType in dataOb) {
    if (dataOb[mealType] && dataOb[mealType][index]) {
      const content = dataOb[mealType][index];
      contentArr.push({ label: mealType, content });
    }
  }

  return (
    <Tab heading={heading} key={`Tab__${index}`}>
      {contentArr.map((elem, i) => {
        const recipe = elem.content.recipe;
        if (!recipe) return null;

        const dietLabels = recipe.dietLabels || [];
        const healthLabels = recipe.healthLabels || [];

        return (
          <Meal
            type={elem.label}
            imgSrc={recipe.image || null}
            heading={recipe.label || null}
            source={recipe.source || null}
            tags={[...dietLabels, ...healthLabels]}
            url={recipe.url || "#"}
            key={`Meal__${i}_${index}`}
          />
        );
      })}
    </Tab>
  );
};

const createTabs = (count, data) => {
  const tabs = [];
  for (let i = 0; i < count; i++) {
    const content = createContent(`Day ${i + 1}`, data, i);
    tabs.push(content);
  }
  return (
    <Tabs defaultIndex={0} className="Plan__tabs">
      {tabs}
    </Tabs>
  );
};

const Plan = (props) => {
  const { location } = props;
  if (!location || !location.state || !location.state.data) {
    return (
      <div>
        <Nav />
        <NotFound />
      </div>
    );
  }

  const { num, data } = location.state.data;

  return (
    <div className="Plan">
      <Nav />
      {createTabs(num, data)}
    </div>
  );
};

Plan.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        num: PropTypes.number.isRequired,
        data: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Plan;
