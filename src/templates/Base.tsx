import Header from '../components/Header';

type BaseTemplateProps = {
  children: React.ReactNode;
};

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <div className="page">
    <Header />

    {children}
  </div>
);

export default BaseTemplate;
