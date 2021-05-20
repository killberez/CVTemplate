const colors = require('tailwindcss/colors');

module.exports = {
  green: {
    colors: {
      'cv-link': colors.blue[400],
      'cv-base': colors.coolGray[800],
      'cv-title': colors.coolGray[500],
      'cv-separator': colors.gray[300],
      'cv-experience-title': colors.emerald[500],
      'cv-experience-meta': colors.coolGray[400],
    },
    backgroundColor: {
      'cv-button': colors.emerald[500],
      'cv-contacts': colors.coolGray[100],
      'cv-background': colors.coolGray[800],
      'cv-button-hover': colors.emerald[600],
    },
    borderColor: {
      'cv-sidebar': colors.green[500],
    },
  },
  orange: {
    colors: {
      'cv-link': colors.blue[400],
      'cv-base': colors.coolGray[800],
      'cv-title': colors.coolGray[500],
      'cv-separator': colors.coolGray[300],
      'cv-experience-meta': colors.coolGray[400],
      'cv-experience-title': colors.orange[500],
    },
    backgroundColor: {
      'cv-button': colors.orange[500],
      'cv-contacts': colors.coolGray[100],
      'cv-background': colors.coolGray[800],
      'cv-button-hover': colors.orange[600],
    },
    borderColor: {
      'cv-sidebar': colors.coolGray[300],
    },
  },
  gray: {
    colors: {
      'cv-link': colors.blue[400],
      'cv-base': colors.coolGray[800],
      'cv-title': colors.coolGray[600],
      'cv-separator': colors.coolGray[300],
      'cv-experience-meta': colors.coolGray[500],
      'cv-experience-title': colors.coolGray[700],
    },
    backgroundColor: {
      'cv-button': colors.coolGray[600],
      'cv-contacts': colors.coolGray[100],
      'cv-background': colors.coolGray[800],
      'cv-button-hover': colors.coolGray[700],
    },
    borderColor: {
      'cv-sidebar': colors.coolGray[300],
    },
  },
  yourCustomPalette: {
    colors: {
      'cv-link': colors.blue[400],
      'cv-base': colors.coolGray[800],
      'cv-title': colors.coolGray[600],
      'cv-separator': colors.coolGray[300],
      'cv-experience-meta': colors.coolGray[500],
      'cv-experience-title': colors.coolGray[700],
    },
    backgroundColor: {
      'cv-button': colors.coolGray[600],
      'cv-contacts': colors.coolGray[100],
      'cv-background': colors.coolGray[800],
      'cv-button-hover': colors.coolGray[700],
    },
    borderColor: {
      'cv-sidebar': colors.coolGray[400],
    },
  },
};
