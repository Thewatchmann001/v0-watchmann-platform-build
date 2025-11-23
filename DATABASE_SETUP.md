# Watchmann Database Setup Guide

This guide will help you set up the Watchmann database schema in your Supabase project.

## Prerequisites

- A Supabase project connected to this v0 workspace
- The Supabase integration environment variables configured

## Running the SQL Scripts

The database schema is split into multiple SQL migration files in the `/scripts` folder:

1. **001_create_users_and_profiles.sql** - Creates user profiles and organizations tables
2. **002_create_projects_and_tasks.sql** - Creates project management tables
3. **003_create_marketplace.sql** - Creates marketplace and orders tables
4. **004_create_academy.sql** - Creates LMS (courses, lessons, enrollments) tables
5. **005_create_blog_and_ai_labs.sql** - Creates blog posts and AI Labs projects tables

### How to Run Scripts in v0

You can execute these scripts directly from v0:

1. Click the "Run" button next to each SQL script file in the Scripts section
2. Run them in order (001, 002, 003, 004, 005)
3. Each script includes Row Level Security (RLS) policies for multi-tenant data protection

### What Gets Created

The complete schema includes:

**Core Tables:**
- `organizations` - Multi-tenant organization management
- `profiles` - User profiles with roles (admin, client, instructor)
- `projects` - Client projects and tasks
- `marketplace_products` - Products/services for sale
- `marketplace_orders` - Purchase orders
- `courses` - Academy courses with instructors
- `lessons` - Course curriculum content
- `enrollments` - Student course enrollments with progress tracking
- `blog_posts` - Blog articles
- `ai_lab_projects` - AI Labs innovation showcase

**Security:**
- All tables have Row Level Security (RLS) enabled
- Policies ensure users can only access data from their organization
- Admin users have elevated permissions for management

## Verification

After running all scripts, verify the setup by checking:

1. All tables exist in your Supabase dashboard
2. RLS policies are enabled on each table
3. You can create test data without errors

## Next Steps

Once the database is set up:

1. Create your first organization through the signup flow
2. Users who sign up will automatically get a profile created
3. Start using the platform features (projects, marketplace, academy, etc.)

## Troubleshooting

**Error: "relation does not exist"**
- Make sure you've run all SQL scripts in order
- Check that the scripts executed without errors

**Error: "permission denied"**
- Verify RLS policies are enabled
- Check that your user is authenticated
- Ensure you're part of an organization

For additional help, check the Supabase documentation or reach out to support.
