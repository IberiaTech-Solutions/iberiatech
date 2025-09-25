# Environment Variables Setup for ChatGPT Integration

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Optional: Set the default model (gpt-3.5-turbo or gpt-4)
OPENAI_MODEL=gpt-3.5-turbo

# Optional: Set max tokens for responses
OPENAI_MAX_TOKENS=500
```

## How to Get OpenAI API Key

1. Go to https://platform.openai.com/
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Click "Create new secret key"
5. Copy the key and add it to your `.env.local` file

## Security Notes

- Never commit `.env.local` to version control
- The `.env.local` file is already in `.gitignore`
- Keep your API key secure and don't share it publicly

## Cost Considerations

- GPT-3.5-turbo: ~$0.002 per 1K tokens (very affordable)
- GPT-4: ~$0.03 per 1K tokens (more expensive)
- Typical conversation: 100-500 tokens per exchange
- Estimated cost: $0.01-0.05 per conversation
