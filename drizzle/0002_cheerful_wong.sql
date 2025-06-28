-- Add role column as nullable first
ALTER TABLE "idea_chat" ADD COLUMN "role" text;

-- Update existing records based on message prefix
UPDATE "idea_chat" 
SET "role" = CASE 
    WHEN "message" LIKE 'AI: %' THEN 'assistant'
    ELSE 'user'
END;

-- Clean up AI: prefix from assistant messages
UPDATE "idea_chat" 
SET "message" = SUBSTRING("message", 5)
WHERE "role" = 'assistant' AND "message" LIKE 'AI: %';

-- Make role column NOT NULL
ALTER TABLE "idea_chat" ALTER COLUMN "role" SET NOT NULL;