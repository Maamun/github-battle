import React, {
  Component,
} from 'react';

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
    });
  }
  render() {
    const languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python',
    ];
    return (
      <div className="main">
        <div className="popular">
          <ul className="nav-link">
            {languages.map(
              (language) => (
                <li key={language}>
                  <button
                    className={
                      language ===
                      this.state
                        .selectedLanguage
                        ? 'active'
                        : null
                    }
                    onClick={() =>
                      this.updateLanguage(
                        language
                      )
                    }
                  >
                    {language}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="grid"></div>
      </div>
    );
  }
}
export default Popular;
