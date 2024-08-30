import config from '@/config.json';
import Chat from '@/shared/components/chat/Chat.tsx';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className="prose p-4 md:p-8 max-w-[768px] mx-auto">
      <h1>
        SAT BLASTER
      </h1>
      <p>
        This is a nostr and cashu powered bitcoin wallet named sat blaster, it enables stream or subscribe to npub while supporting zap splits 
      </p>
      <p>
        <a href="https://github.com/irislib/iris-docs" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <h3>Chat</h3>
      <Chat path="apps/chat/chats/create-iris" />
      <h3>Dashboard</h3>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
