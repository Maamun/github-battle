import React, {
  Component,
} from 'react';

function LanguagesNav({
  selected,
  onUpdateLanguage,
}) {
  const languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python',
  ];
  return (
    <div className="popular">
      <ul className="nav-link">
        {languages.map((language) => (
          <li key={language}>
            <button
              className={
                language === selected
                  ? 'active'
                  : null
              }
              onClick={() =>
                onUpdateLanguage(
                  language
                )
              }
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };
    console.log('here', this);
    this.updateLanguage = this.updateLanguage.bind(
      this
    );
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });
  }
  render() {
    const {
      selectedLanguage,
    } = this.state;
    return (
      <div className="main">
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={
            this.updateLanguage
          }
        />
        <div className="grid"></div>
      </div>
    );
  }
}
export default Popular;
