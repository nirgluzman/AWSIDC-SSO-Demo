// Public landing page - accessible without authentication

const PublicPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>AWS Identity Center Demo</h1>
      <p>This is a public page accessible to everyone.</p>
      <p>
        Domain: {/* External link opens in new tab for security */}
        <a href='https://awsidcdemo.gluzman.net' target='_blank' rel='noopener noreferrer'>
          awsidcdemo.gluzman.net
        </a>
      </p>
    </div>
  );
};

export default PublicPage;
