// src/theme/MDXComponents.js
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents'; // Import default components
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Stepper from '@site/src/components/Stepper';
import Step from '@site/src/components/Step';

export default {
  // Extend or add new components while keeping the existing ones
  ...MDXComponents,
  Tabs,
  TabItem,
  Stepper,
  Step,
};
