---
slug: when-onmodelcreating-starts-to-feel-heavy
title: When OnModelCreating Starts to Feel Heavy
excerpt: A personal reflection on how a growing EF Core project turned OnModelCreating into a source of friction—and the simple pattern that made it feel light again.
date: 2025-12-27
category: story
tags: [efcore, dotnet, codefirst, database, refactoring]
published: true
---

A while ago, I realized I had picked up another bad habit: procrastination.
Not procrastinating big tasks — just one small thing: opening my `DbContext`.

Not because I was lazy to code, but because every time I opened that file, it felt like opening a messy wardrobe in a student dorm. The intention was simple — add one model or tweak a relationship — but instead, I was greeted by a long wall of `OnModelCreating` configurations.

The bigger the project grew, the more I found myself scrolling… just to locate a single relationship.

Ironically, at the beginning, everything felt great. EF Core with Code First was genuinely enjoyable to work with. You define a class, add navigation properties, run migrations, and the database just works. Clean and satisfying.

But over time, real requirements started to appear. Optional one-to-one relationships. Unique constraints. Soft deletes. Enum mappings. Custom column types. All reasonable things.

And somehow, all of them ended up in one place.

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<User>()
        .HasOne(u => u.Consultant)
        .WithOne(c => c.User)
        .HasForeignKey<Consultant>(c => c.UserId);

    modelBuilder.Entity<Consultant>()
        .HasIndex(c => c.UserId)
        .IsUnique();

    modelBuilder.Entity<Order>()...
    modelBuilder.Entity<OrderItem>()...
    modelBuilder.Entity<Message>()...
}
```

At first, it didn’t feel like a problem. But as the number of models increased, `OnModelCreating` slowly shifted from “initial setup” to the center of complexity. Trying to understand one entity meant reading through configurations for many others. Refactoring started to feel like untangling a bundle of wires — one wrong move, and something else breaks.

At that point, I genuinely wondered:
“Is this just the price you pay when using Code First?”

Turns out — no.

EF Core actually provides a much cleaner pattern, one that’s rarely highlighted in basic tutorials: moving each entity’s configuration into its own class using `IEntityTypeConfiguration<T>`.

Once I tried it, everything clicked.

For example, instead of placing the optional one-to-one relationship between `User` and `Consultant` in the middle of `DbContext`, the configuration lives right next to the model it belongs to.

```csharp
public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder
            .HasOne(u => u.Consultant)
            .WithOne(c => c.User)
            .HasForeignKey<Consultant>(c => c.UserId);
    }
}
```

And database-specific rules on the Consultant side, like unique constraints, have their own dedicated place as well.

```csharp
public class ConsultantConfiguration : IEntityTypeConfiguration<Consultant>
{
    public void Configure(EntityTypeBuilder<Consultant> builder)
    {
        builder
            .HasIndex(c => c.UserId)
            .IsUnique();
    }
}
```

Now, when I want to understand the User–Consultant relationship, I don’t open `DbContext` anymore. I open `UserConfiguration` or `ConsultantConfiguration`. One file. One responsibility.

`DbContext` itself becomes refreshingly small.

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.ApplyConfigurationsFromAssembly(
        typeof(AppDbContext).Assembly);
}
```

That’s it.

From that point on, working with migrations felt lighter. Changes became more predictable. Modifying one model no longer came with the anxiety of accidentally affecting others.

Yes, the number of files increased. But paradoxically, the project felt simpler. More structured. Like breaking down a large, overloaded class into smaller ones with clear responsibilities.

That experience led me to a simple realization:
when Code First starts to feel painful, it’s usually not because EF Core is the problem — it’s because the project has grown, while the structure is still stuck in its early days.

And the solution that felt like “wow, how did I not know this earlier?” had been there all along, waiting for the project to reach that stage.

Sometimes, cleanliness isn’t about writing less code — it’s about putting the code in the right place.
