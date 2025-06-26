-- Add a temporary column with jsonb type
ALTER TABLE "user" ADD COLUMN "skills_new" jsonb DEFAULT '[]'::jsonb;

-- Convert existing text array skills to jsonb format
UPDATE "user" 
SET "skills_new" = (
  SELECT jsonb_agg(jsonb_build_object('name', skill, 'level', 'beginner'))
  FROM unnest("skills") AS skill
  WHERE array_length("skills", 1) IS NOT NULL
);

-- For users with empty skills array, set to empty jsonb array
UPDATE "user" 
SET "skills_new" = '[]'::jsonb
WHERE "skills_new" IS NULL;

-- Drop the old column
ALTER TABLE "user" DROP COLUMN "skills";

-- Rename the new column to the original name
ALTER TABLE "user" RENAME COLUMN "skills_new" TO "skills";

-- Make the column not null
ALTER TABLE "user" ALTER COLUMN "skills" SET NOT NULL;